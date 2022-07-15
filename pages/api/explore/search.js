import { ref, child, get} from "firebase/database";
import { userdatabase } from "../../../components/config/fireb-2";

export default function handler(req, res) {
    const dbRef = ref(userdatabase);

    get(child(dbRef, "/user")).then((snapshot) => {
        if (snapshot.exists()) {
        var getdata = snapshot.val();
        var users = Object.keys(getdata)
        
        var pages = ['Articles','Hackathons','Events','Courses','News','Web3 - Article','DAO (Decentralized Autonomous Organization) - Article','NFT (Non-Fungible Token) - Article','DeFi Theory - Article','Proof Of Work - Article','Proof Of Stake - Article']
        var page_links = ['/explore/articles','/explore/hackathons','/explore/events','/explore/courses','/new','explore/article/web3','explore/article/dao','explore/article/nft','explore/article/defi-theory','explore/article/proof-of-work','explore/article/proof-of-stake']
        
        for (var i =0; i < users.length ;i++) {
            pages.push(users[i]+" - user")
            page_links.push("/user/"+users[i])
        }

        res.status(200).json({"pages":pages,"page_links":page_links})
        }
    }).catch((error) => {
        res.status(200).json(error)
    });

  }
