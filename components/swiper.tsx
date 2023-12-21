import { View, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useRef } from "react";

const { width: dwidth } = Dimensions.get("window");

const Ddata = [0, 1, 2, 3, 4, 5];

const Swiper = () => {
  const sliderRef = useRef<FlatList<number>>(null);
  const dotRef = useRef<View[] | null[]>([]);
  const scroll = useRef<number>(0);

  useEffect(() => {
    const e = setInterval(() => {
      //   console.log('hi');
      if (sliderRef) {
        sliderRef.current?.scrollToIndex({
          animated: true,
          index: scroll.current,
        });
      }

      if (scroll.current !== Ddata.length - 1) {
        scroll.current = scroll.current + 1;
      } else {
        scroll.current = 0;
      }
    }, 3000);

    return () => {
      clearInterval(e);
    };
  }, []);

  return (
    <View style={{ position: "relative" }}>
      <View>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ width: 3 }} />}
          showsHorizontalScrollIndicator={false}
          data={Ddata}
          horizontal
          pagingEnabled
          onScroll={(e) => {
            const index: number = Number(
              (e.nativeEvent.contentOffset.x / dwidth).toFixed(0)
            );
            // console.log(index);
            for (const n of Ddata) {
              // console.log(n);
              if (n === index) {
                // console.log('amila', n);

                dotRef.current[n]?.setNativeProps({
                  style: { backgroundColor: "rgb(20 83 45)" }, // Change background color
                });
              } else {
                // console.log('uup', n);

                dotRef.current[n]?.setNativeProps({
                  style: { backgroundColor: "#797979" }, // Change background color
                });
              }
            }
          }}
          ref={sliderRef}
          renderItem={({ item }) => (
            <View
              style={{
                width: dwidth,
                height: 200,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://image.wedmegood.com/resized/540X/uploads/project/136126/1620733979_DSC_7073.jpg?crop=12,74,2024,1138",
                }}
                className=" w-full h-full object-contain"
              />
              {/* <Text style={{ color: "white", fontSize: 15 }}>{item}</Text> */}
            </View>
          )}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: Number(
            ((200 - (10 * Ddata.length + 5 * (Ddata.length - 1))) / 2).toFixed()
          ),
          right: 7,
          gap: 5,
        }}
      >
        {Ddata.map((_, index) => (
          <View
            key={index}
            ref={(ref) => (dotRef.current[index] = ref)}
            style={{
              width: 10,
              height: 10,
              borderRadius: 20,
              backgroundColor: "white",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Swiper;
