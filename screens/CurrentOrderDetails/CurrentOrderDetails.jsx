import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DeliveryContext } from '../../contexts/DeliveryContext';
import { UserContext } from '../../contexts/UserContext';

import { updateCurrentOrder } from '../../services/order/orderService';

const defualtImg = "https://e7.pngegg.com/pngimages/664/210/png-clipart-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo.png";
//const defualtImg = "https://www.clipartmax.com/png/middle/475-4757771_cook-food-order-dish-restaurant-icon-cook-food-order-dish-restaurant-icon.png";

const getTotal = (order) => {
    let total = 0;
    if(order && order.meals && order.meals.length > 0){
        for (const meal of order.meals){
            total += meal.price;
        }
    }
    return total;
}

const renderDetails = (order) => {
    return(
        <View style={styles.orderDetailsContent}>
            <View style={styles.detailRow}>
                <View>
                    <Text style={styles.textDetailTitle}>Franquicia: </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>{order.name}</Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <View>
                    <Text style={styles.textDetailTitle}>Dirección de Retiro: </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>{order.franchise_address}</Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <View>
                    <Text style={styles.textDetailTitle}>Dirección de Entrega: </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>{order.client_address}</Text>
                </View>
            </View>
            <View style={styles.detailRow}>
                <View>
                    <Text style={styles.textDetailTitle}>Pedido: </Text>
                </View>
            </View>
            <View style={styles.orderDetailRow}>
                <ScrollView style={{width: "98.5%"}} contentContainerStyle={{flexGrow: 1}}>
                    {order.meals && order.meals.length !== 0 && order.meals.map(meal => (
                        <View style={{width: '100%', marginVertical: 6}} key={meal.meal_id}>
                            <View style={{...styles.orderElements, width: '100%', display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                                <View style={{flex: 2.5, flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={{width: 40, height: 40, borderRadius: 20}} source={{uri: `${meal.photo_url ? meal.photo_ur : defualtImg}`}}/>
                                    <Text style={{...styles.textDetail,...styles.orderElement}}>{meal.name}</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{...styles.textDetail,...styles.orderElement, marginLeft: "30%"}}>${meal.price}</Text>
                                </View>
                            </View>
                            <View style={{width: '100%', alginItems: 'flex-start', marginLeft: "13.5%", marginVertical: 2}}> 
                                <Text style={{color: "rgba(0,0,0,0.55)"}}>{meal.ingredients.map(ing => ing.name.toString()).join(", ")}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{...styles.detailRow, marginTop: 8}}>
                <View>
                    <Text style={{...styles.textDetailTitle, fontSize: 18}}>Total: </Text>
                </View>
                <View>
                    <Text style={{...styles.textDetailTitle, fontSize: 18}}>${getTotal(order)}</Text>
                </View>
            </View>
        </View>
    );
}

const estados = ["RETIRAR","RETIRADO","ENTREGADO"]
const actions = ["¡Retiré el Pedido!","¡Entregué el Pedido!","Pedido entregado!"]

const renderButtons = (id, status, handlePress) => {
    const buttonActionLabel = () => {
        let buttonLabel = ""
        switch(status){
            case estados[0]:
                buttonLabel = actions[0];
                break;
            case estados[1]:
                buttonLabel = actions[1];
                break;
            case estados[2]:
                buttonLabel = actions[2];
                break;
            default:
                buttonLabel = "No Disponible"
                break;
        }
        return buttonLabel;
    }

    const handleOnPress = () => {
        let newStatus = "";
        switch(status){
            case estados[0]:
                newStatus = estados[1];
                break;
            case estados[1]:
                newStatus = estados[2]
                break;
            default:
                newStatus = null;
                break;
        }
        handlePress(id, newStatus)
    }

    return (
        <View style={styles.buttonLayer}>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Button
                    icon="check-bold"
                    mode="contained"
                    onPress={() => handleOnPress()}
                    style={{ marginTop: 20, alignSelf: 'stretch' }}
                    disabled={![...estados].filter(st => st !== "ENTREGADO").includes(status)}
                    loading={false}
                    color='rgb(208, 9, 9)'
                >
                    {buttonActionLabel()}
                </Button>
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Button
                    icon="close"
                    mode="contained"
                    onPress={() => console.log("Rechazar!!")}
                    style={{ marginTop: 20, alignSelf: 'stretch' }}
                    disabled={status !== estados[0]}
                    loading={false}
                    color='rgba(0, 0, 0,0.16)'
                >
                    Darme de baja
                </Button>
            </View>
        </View>
    );
}

const CurrentOrderDetails = () => {
    const navigation = useNavigation()
    const {user} = useContext(UserContext);
    const {currentDelivery, setCurrentDelivery} = useContext(DeliveryContext);

    const goBack = () => {
        navigation.goBack();
    }

    const handleUpdateStatus = async (id,newStatus) => {
        try{
            console.log("Updating order...");
            const reqBody = {
                id : id,
                orderStatus: newStatus
            }
            let res = await updateCurrentOrder(reqBody);
            let updatedOrder = await res.json();
            console.log("Updated order res: ", updatedOrder);
            if(updatedOrder){
                console.log("Updated data: ", updatedOrder.data);
                setCurrentDelivery({...currentDelivery, orderStatus: newStatus});
                goBack();
            }
            else{
                throw new Error("No se pudo actualizar la orden actual");
            }
        }
        catch(err){
            console.log("Error al actualizar la orden actual");
            console.log(err);
        }
    }

    return (
        <SafeAreaView style={{flex: 1, flexGrow:1}} >
            <Provider>
                <TopBar/>
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => goBack()}>
                            <Button color="grey" icon="chevron-left" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Numero de {currentDelivery.orderType ? currentDelivery.orderType : "Pedido"}: #{currentDelivery.orderId ? currentDelivery.orderId : 1782}</Text>
                    </View>
                    <View style={styles.orderDetails}>
                        { currentDelivery? 
                            renderDetails(currentDelivery)
                        : 
                        ( <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <Text style={styles.noOrders}>-- Error al obtener datos del pedido --</Text>
                            </View> )
                        }
                    </View>
                    {renderButtons(currentDelivery.id,currentDelivery.orderStatus, handleUpdateStatus)}
                </View>
            </Provider>
        </SafeAreaView>
    );
}

export default CurrentOrderDetails;