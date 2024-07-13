import * as React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Post from './Post';
import {  useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../constant/constants';

interface PostsListProps { }

const userImage = "../../../../assets/dummy_img/user.png"




const PostsList = (props: PostsListProps) => {
    const nav = useNavigation()
    const handleHeaderPress = () => {
        nav.navigate(SCREENS.CREATE_POST_SCREEN.name)

    }

    const posts = useSelector((state: RootState) => state.posts)
    const oldContent = posts.map(post => (
        <Post post={post} key={post.id} />
    ))
    const newContent =
        <>
            <FlatList

                data={posts}
                ListHeaderComponent={() => <Pressable onPress={handleHeaderPress} style={styles.header}>


                    <Image source={require(userImage)} style={styles.profileImage} />

                    <Text style={styles.name}>What's on your mind?</Text>
                    {/* <Entypo
                        name="images"
                        size={24}
                        color="limegreen"
                        style={styles.icon}
                    /> */}
                </Pressable>}
                renderItem={({ item: post }) =>

                    <Post post={post} key={post.id}  />


                }
            />
        </>


    if (posts.length == 0) {
        return 'loading ...'
    } else {
        return newContent
    }

};

export default PostsList;




const styles = StyleSheet.create({
    postListHeader: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 16
    },
    post: {
        marginVertical: 5,
        backgroundColor: "#fff",
    },
    // Header
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    subtitle: {
        color: "gray",
    },
    icon: {
        marginLeft: "auto",
    },

    // Body
    description: {
        paddingHorizontal: 10,
        lineHeight: 20,
        letterSpacing: 0.3,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginTop: 10,
    },

    // Footer
    footer: {
        paddingHorizontal: 10,
    },
    statsRow: {
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
    },
    likeIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    likedBy: {
        color: "gray",
    },
    shares: {
        marginLeft: "auto",
        color: "gray",
    },

    // Buttons row
    buttonsRow: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButtonText: {
        marginLeft: 5,
        color: "gray",
        fontWeight: "500",
    },
});

