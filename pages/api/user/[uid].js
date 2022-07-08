import { ref, child, get} from "firebase/database";
import {userdatabase} from "../../../components/config/fireb-2"

export default function handler(req, res) {
    const { uid } = req.query

    const dbRef = ref(userdatabase);

    get(child(dbRef, "/user/"+uid.toLowerCase())).then((snapshot) => {
        if (snapshot.exists()) {
        var data = snapshot.val();
        res.status(200).json(data)
        }
    }).catch((error) => {
        console.error(error);
    });

  }