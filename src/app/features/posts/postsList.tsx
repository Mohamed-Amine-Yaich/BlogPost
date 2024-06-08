import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface PostsListProps { }

const PostsList = (props: PostsListProps) => {

    const posts = useSelector((state: RootState) => state.posts)
    console.log(posts)
    const content = posts.map(post => (
        <View style={styles.container} key={post.id}>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </View>
    ))
    if (content.length == 0) {
        return 'loading ...'
    } else {
        return content
    }

};

export default PostsList;

const styles = StyleSheet.create({
    container: {}
});
