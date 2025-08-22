import { Image, Pressable, Text } from "react-native";

export default function Index() {
  return (
    <Pressable className="flex-1 justify-center items-center bg-white">
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        width={200}
        height={200}
      />

      <Text className="text-4xl text-black text-center active:text-pink mt-2 font-bold">
        Title
      </Text>
      <Text className="text-base text-black text-center active:text-pink-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        aspernatur tempora nesciunt eaque. Accusantium hic nesciunt dolorem
        dolore blanditiis libero ipsam assumenda cupiditate alias adipisci et
        similique fugiat, ullam natus.
      </Text>
    </Pressable>
  );
}
