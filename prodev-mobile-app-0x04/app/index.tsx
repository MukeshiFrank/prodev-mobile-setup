import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
          </View>

          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>The best prices for over 2</Text>
            <Text style={styles.titleSubText}>million properties worldwide</Text>
          </View>

          <View style={{ position: "absolute", bottom: 50, width: "100%" }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => router.push("/join")}
              >
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => router.push("/signin")}
              >
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonGroupSubText}>
              <Text style={styles.buttonSecondaryText}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
