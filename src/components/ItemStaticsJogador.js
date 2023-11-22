import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from 'victory-native';
import apiSocialSearch from '../services/apiSocialSearch';
import SkeletonStatics from './Skeleton/SkeletonStatics';

const ItemStaticsJogador = ({ jogador }) => {
    const colorScale = ["#00cc00", "#ffff00", "#ff0000"];
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const instagramData = apiSocialSearch.get(`&q="${jogador}"&limit=100&network=instagram`);
                const facebookData = apiSocialSearch.get(`&q="${jogador}"&limit=100&network=reddit`);
                const twitterData = apiSocialSearch.get(`&q="${jogador}"&limit=100&network=youtube`);
    
                const [instagramResult, facebookResult, twitterResult] = await Promise.all([instagramData, facebookData, twitterData]);
    
                const concatenatedPosts = [
                    ...instagramResult.data.posts,
                    ...facebookResult.data.posts,
                    ...twitterResult.data.posts,
                ];
    
                setPosts(concatenatedPosts);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados das redes sociais", error);
            }
        };
    
        fetchData();
    }, [jogador]);

    const contarSentimentos = () => {
        const counts = {};
        
        posts.forEach(post => {
            const network = post.network;
            const sentiment = post.sentiment;

            if (!counts[network]) {
                counts[network] = { positive: 0, neutral: 0, negative: 0 };
            }

            counts[network][sentiment]++;
        });

        const resultJson = [];
        for (const network in counts) {
            const countObj = counts[network];
            resultJson.push({
                x: network,
                positive: countObj.positive,
                neutral: countObj.neutral,
                negative: countObj.negative
            });
        }

        return resultJson;
    };

    const contagensSentimentos = contarSentimentos();

    return (
        <View>
            {posts.length ? (
                <VictoryChart domainPadding={{ x: 20 }}>
                    <VictoryGroup offset={20} colorScale={colorScale}>
                        <VictoryBar
                            data={contagensSentimentos}
                            x="x"
                            y="positive"
                        />
                        <VictoryBar
                            data={contagensSentimentos}
                            x="x"
                            y="neutral"
                        />
                        <VictoryBar
                            data={contagensSentimentos}
                            x="x"
                            y="negative"
                        />
                    </VictoryGroup>
                    <VictoryAxis tickValues={contagensSentimentos.map(data => data.x)} />
                </VictoryChart>
            ) : (
                <SkeletonStatics/>
            )}
        </View>
    );
};

export default ItemStaticsJogador;
