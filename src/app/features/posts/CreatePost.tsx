import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
//import { Entypo } from "@expo/vector-icons";

const userImage = "../../../../assets/dummy_img/user.png"

interface createPostProps { }


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {

    }, []);

    const onSubmit = async () => {
        if (title && description) {

            dispatch(createPost({
                content: description,
                title,


            }))
            setDescription("");
            setTitle("")
        }


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


            <TouchableOpacity onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
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
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    icon: {
        marginLeft: "auto",
    },
});




