import {
    createContext,
    useReducer,
    useEffect
} from "react";

export const AuthContext = createContext()

const initialState = {
    logged: false,
    user: null
};

function authReducer (state, action) {

    switch (action.type) {

        case "LOGIN":
            return {
                logged: true,
                user: action.payload
            };

        case "LOGOUT":
            return {
                logged: false,
                user: null
            };

        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [authState, dispatch] = useReducer(
        authReducer,
        initialState,
        () => {

            try {
                const saved = localStorage.getItem("user");

                return saved
                    ? {
                        logged: true,
                        user: JSON.parse(saved)
                    }
                    : initialState;

            } catch {
                return initialState;
            }
        }
    );

    useEffect(() => {

        if (authState.logged) {

            localStorage.setItem(
                "user",
                JSON.stringify(authState.user)
            );

        } else {

            localStorage.removeItem("user")

        }
    }, [authState]);

    return (
        <AuthContext.Provider
            value={{ authState, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    );
}