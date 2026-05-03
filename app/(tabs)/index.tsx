import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1  bg-background p-5">
      <Text className="text-7xl font-sans-extrabold">Home</Text>

      <Link
        href="/onboarding"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Create an account
      </Link>
    </SafeAreaView>
  );
}
