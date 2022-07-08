import { ref, child, get} from "firebase/database";
import { database } from "../../../components/config/fireb"

export default function handler(req, res) {
    const { type } = req.query

    const dbRef = ref(database);

    get(child(dbRef, type + "/")).then((snapshot) => {
        if (snapshot.exists()) {
        var data = snapshot.val();
        var values = Object.values(data);
        res.status(200).json(values)
        } else {
            res.status(200).json([])
        }
    }).catch((error) => {
        console.error(error);
    });

  }