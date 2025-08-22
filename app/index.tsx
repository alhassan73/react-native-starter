import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-300">
      <View className="w-full object-cover h-[300px]">
        <Image
          source={{
            uri: "https://gluestack.io/_next/image?url=%2Fimages%2Fclick.jpeg&w=1920&q=75",
          }}
          className="w-full h-full"
        />
      </View>

      <Text className="text-4xl text-black text-center active:text-pink mt-2 font-bold">
        Title
      </Text>
      <Text className="text-base text-black text-center active:text-pink-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        aspernatur tempora nesciunt eaque. Accusantium hic nesciunt dolorem
        dolore blanditiis libero ipsam assumenda cupiditate alias adipisci et
        similique fugiat, ullam natus.
      </Text>

      <Link href={"/about"} className="text-blue-700 underline text-3xl">
        About
      </Link>
    </View>
  );
}
