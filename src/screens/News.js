import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import NewsApi from "../api/NewsApi"
import { List } from 'react-native-paper';
import { Linking } from 'react-native';
import Spinner from '../components/Spinner';
import { FontAwesome } from '@expo/vector-icons';

const News = () => {
    const [data, setData] = useState(null)


    const hackerNews = async () => {
        const response = await NewsApi.get("/")
        setData(response.data)
    }

    useEffect(() => {
        hackerNews();
    }, [])

    if (!data) {
        return <Spinner />
    }

    return (
        <View style={{ backgroundColor: "#1d521a" }}>
            <FlatList
                data={data}
                keyExtractor={result => result.Title}

                renderItem={({ item }) => {
                    return (
                        <List.Item
                            style={{ borderBottomColor: "#b7dcc8", borderBottomWidth: 1 }}
                            title={item.Title}
                            titleStyle={{ color: "#b7dcc8" }}
                            onPress={() => Linking.openURL(item.Link)}
                            description={`${item.Votes} votes`}
                            descriptionStyle={{ color: "#fff" }}
                            left={() =>
                                <FontAwesome
                                    name="hacker-news"
                                    size={16}
                                    color="#b7dcc8"
                                    style={{ marginTop: 11 }}
                                />}
                            
                        />
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({})

export default News