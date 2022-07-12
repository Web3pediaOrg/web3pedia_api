import { ref, child, get} from "firebase/database";
import {userdatabase} from "../../../components/config/fireb-2"

export default function handler(req, res) {
    const { uid } = req.query

    const dbRef = ref(userdatabase);

    get(child(dbRef, "/user/"+uid.toLowerCase())).then((snapshot) => {
        if (snapshot.exists()) {
        var data = snapshot.val();
        const projectdata = []

        if (data.projects != undefined) {
            const projectkeys = Object.keys(data.projects)
            for (var i =0; i < projectkeys.length ;i++) {
                var k = data.projects[projectkeys[i]]
                projectdata.push(k)   
            }
        }
        else {}

        res.status(200).json({"profile":data.profile,"projects":projectdata})
        }
        
    }).catch((error) => {
        console.error(error);
    });

  }