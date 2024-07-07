import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieType } from "../../api/movieService";

export type propsNavigatorStack = {
    HomeScreen: any;
    MovieDetailScreen: MovieType;
    ProfileScreen: any;
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>