import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Provider } from 'react-native-paper';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DeliveryContext } from '../../contexts/DeliveryContext';

const getTotal = (order) => {
    let total = 0;
    for (const meal of order.meals){
        total += meal.price;
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
                    <Text style={styles.textDetailTitle}>Dirección: </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>{order.franchise_address}</Text>
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
                                    <Image style={{width: 40, height: 40, borderRadius: 20}} source={{uri: `${meal.photo_url}`}}/>
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

const renderButtons = (currentDelivery,setDelivery) => {
    return (
        <View style={styles.buttonLayer}>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Button
                    icon="check-bold"
                    mode="contained"
                    onPress={() => setDelivery()}
                    style={{ marginTop: 20, alignSelf: 'stretch' }}
                    disabled={currentDelivery && currentDelivery.id}
                    loading={false}
                    color='rgb(208, 9, 9)'
                >
                    Aceptar
                </Button>
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Button
                    icon="close"
                    mode="contained"
                    onPress={() => console.log("Rechazar!!")}
                    style={{ marginTop: 20, alignSelf: 'stretch' }}
                    disabled={false}
                    loading={false}
                    color='rgba(0, 0, 0,0.16)'
                >
                    Rechazar
                </Button>
            </View>
        </View>
    );
}

const OrderDetais = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const order = route.params.order;
    const {currentDelivery, setCurrentDelivery} = useContext(DeliveryContext);

    const goBack = () => {
        navigation.goBack();
    }

    const setDelivery = () => {
        console.log("Seteando delivery!");
        setCurrentDelivery({...order,id: 175362, status: "Aceptado"});
        goBack();
        // remove fron available deliveries
    }

    // Method to remove order from available orders' list

    return (
        <SafeAreaView style={{flex: 1, flexGrow:1}} >
            <Provider>
                <TopBar/>
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => goBack()}>
                            <Button color="grey" icon="chevron-left" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Detalles del Pedido:</Text>
                    </View>
                    <View style={styles.orderDetails}>
                        { order? 
                            renderDetails(order)
                        : 
                        ( <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <Text style={styles.noOrders}>-- Error al obtener datos del pedido --</Text>
                            </View> )
                        }
                    </View>
                    {renderButtons(currentDelivery,setDelivery)}
                </View>
            </Provider>
        </SafeAreaView>
    );
}

export default OrderDetais;