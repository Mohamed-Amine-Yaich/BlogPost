

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { selectAllUsers } from '../users/usersSlice';
import { useSelector } from 'react-redux';
import { parseISO,formatDistanceToNow } from 'date-fns';
import TimeAgo from './TimeAgo';
import UserName from './UserName';
const userImage = "../../../../assets/dummy_img/user.png"
const LikeImage = "../../../../assets/dummy_img/like.png"


interface PostProps {
    post: {
        id: number,
        title: string,
        content: string,
        userId?: number,
        date:string
    }
}

const Post = ({ post }: PostProps) => {
    const [isLiked, setIsLiked] = React.useState(false)
  


    return (
        <View style={styles.post} key={post.id}

        >
            {/* Header */}
            <TouchableOpacity
                style={styles.header}
                onPress={() => { console.log('navigate to user profile') }}
            >

                <Image source={require(userImage)} style={styles.profileImage} />

                <View>{/* author and date sections */}
                 <UserName userId={post.userId}/>                    
                 <TimeAgo date={post.date}/>
                </View>
                {/*                 <Entypo
                name="dots-three-horizontal"
                size={18}
                color="gray"
                style={styles.icon}
            /> */}
            </TouchableOpacity>

            {/* Body */}
            {post.title && (
                <Text style={styles.description}>{post.title}</Text>
            )}
            {post.content && (
                <Text style={styles.description}>{post.content}</Text>
            )}

            {/* Footer */}
            <View style={styles.footer}>
                {/* Stats row */}
                <View style={styles.statsRow}>
                    <Image source={require(LikeImage)} style={styles.likeIcon} />
                    <Text style={styles.likedBy}>
                        Amine and 100 others
                    </Text>
                    <Text style={styles.shares}>5 shares</Text>
                </View>
                {/* Buttons Row  */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsLiked(!isLiked)
                            console.log('like press')
                        }}
                        style={styles.iconButton}
                    >
                        {/* <AntDesign
                        name="like2"
                        size={18}
                        color={isLiked ? "royalblue" : "gray"}
                    /> */}
                        <Text
                            style={[
                                styles.iconButtonText,
                                { color: isLiked ? "royalblue" : "gray" },
                            ]}
                        >
                            Like
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('comment press')
                        }}
                        style={styles.iconButton}
                    >
                        {/* <FontAwesome5 name="comment-alt" size={18} color="gray" /> */}
                        <Text style={styles.iconButtonText}>Comment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('share press')
                        }}
                        style={styles.iconButton}
                    >
                        {/* <MaterialCommunityIcons
                        name="share-outline"
                        size={18}
                        color="gray"
                    /> */}
                        <Text style={styles.iconButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Post;




const styles = StyleSheet.create({
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