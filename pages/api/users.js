import { ref, child, get} from "firebase/database";
import { userdatabase } from "../../components/config/fireb-2";

export default function handler(req, res) {
    const dbRef = ref(userdatabase);

    get(child(dbRef, "/user")).then((snapshot) => {
        if (snapshot.exists()) {
        var data = snapshot.val();
        var users = Object.keys(data)
        res.status(200).json(users)
        }
    }).catch((error) => {
        res.status(200).json(error)
        // console.error(error);
    });

  }