import React from 'react'
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
export default function RefreshControlTest() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)

    }, []);

    
    return (

            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
                }>
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        
      
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
