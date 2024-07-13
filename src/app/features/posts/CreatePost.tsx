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
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import SelectDropdown from 'react-native-select-dropdown';
import { selectAllUsers, UserState } from '../users/usersSlice';
//import { Entypo } from "@expo/vector-icons";

const userImage = "../../../../assets/dummy_img/user.png"

interface createPostProps { }


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState<number>();
    const dispatch = useDispatch()
   const users = useSelector(selectAllUsers)
    useEffect(() => {

    }, []);
 
    const onSubmit = async () => {
        if (title && description ) {

            dispatch(createPost({
                content: description,
                title,
                userId

            }))
            setDescription("");
            setTitle("")
            setUserId(undefined)
        }


    };
   //for now we are creating a post with a userId then we need to display in the post list cards!!

    function handleOnDropdownSelect(selectedItem: UserState, index: number): void {
        setUserId(selectedItem.id)
    }
    const canSubmit = Boolean(userId!=undefined) && Boolean(title) && Boolean(description)
    console.log('canSubmit',canSubmit)
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
            <SelectDropdown
                data={users}
                onSelect={handleOnDropdownSelect}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>

                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem.name) || 'set the author'}
                            </Text>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                            <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
                searchInputTxtColor='#151E26'
            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="What is on your mind?"
                multiline
            />


            <TouchableOpacity onPress={onSubmit} style={styles.button} disabled={!canSubmit}>
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


    //// dropdown  menu style

    dropdownButtonStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
        justifyContent: 'flex-start'
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
        color: '#151E26',

    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
        color: '#151E26',

    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },


});




