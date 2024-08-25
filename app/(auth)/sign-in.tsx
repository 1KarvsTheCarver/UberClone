import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAut from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";


const SignIn = ()  => {
    const [form, setform] = useState({
        email:'',
        password:'',
    });

    const onSignInPress = async () => {};

    return(
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image 
                        source={images.signUpCar} className="z-0 w-full h-[250px]"/>
                        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome 👋</Text>
                </View>
                <View className="p-5">
                    <InputField 
                        label="Email"
                        placeholder="Enter Your Email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) => setform({ ...form, email: value })}
                    />
                    <InputField 
                        label="Password"
                        placeholder="Enter Your Password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) => setform({ ...form, password: value })}
                    />

                    <CustomButton 
                    title="Sign In" 
                    onPress={onSignInPress} 
                    className="mt-6" 
                    />

                    <OAut />

                    <Link 
                    href="/sign-up"
                    className="text-lg text-center text-general-200 mt-10"
                    >
                        <Text>Don't have an account?{" "}</Text>
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>

                {/* Verification modal */}
            </View>
        </ScrollView>
    );
};

export default SignIn;