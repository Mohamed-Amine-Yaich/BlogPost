import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';
//import { Entypo } from "@expo/vector-icons";
//import { v4 as uuidv4 } from "uuid";

const userImage = "../../../../assets/dummy_img/user.png"

interface createPostProps { }


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {

    }, []);

    const onSubmit = async () => {
        let count = 4
        const newPost = {
            id: count++,
            title,
            content: description,

        };

        dispatch(createPost(newPost))
        setDescription("");
        setTitle("")

    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container]}
            contentContainerStyle={{ flex: 1 }}
            keyboardVerticalOffset={150}
        >
            <View style={styles.header}>

                <Image source={require(userImage)} style={styles.profileImage} />

                <Text style={styles.name}>Amine</Text>
                {/*    <Entypo
                    onPress={pickImage}
                    name="images"
                    size={24}
                    color="limegreen"
                    style={styles.icon}
                /> */}
            </View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="set a title"
                multiline

            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="What is on your mind?"
                multiline
            />


            <View style={styles.buttonContainer}>
                <Button title="Post" onPress={onSubmit} />
            </View>
        </KeyboardAvoidingView>
    );
};

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10,
    },
    image: {
        width: "50%",
        aspectRatio: 4 / 3,
        alignSelf: "center",
    },
    name: {
        fontWeight: "500",
    },
    buttonContainer: {
        marginTop: "auto",

    },
    icon: {
        marginLeft: "auto",
    },
});



