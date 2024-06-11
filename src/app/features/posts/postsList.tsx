import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Post from './Post';

interface PostsListProps { }



const PostsList = (props: PostsListProps) => {


    const posts = useSelector((state: RootState) => state.posts)

    const oldContent = posts.map(post => (
        <Post post={post} key={post.id} />
    ))
    const newContent =
        <>
            <FlatList
                
                data={posts}
                ListHeaderComponent={() => <Text
                    style={styles.postListHeader}>Posts</Text>}
                renderItem={({ item: post }) =>

                    <Post post={post} key={post.id} />


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

