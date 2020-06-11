import {connect} from "../../src/database";




/**

 * Helper function that grabs all misquotes

 **/

export async function getAllMedia() {

    try {



        const mysqlConnection = await connect()

        const mySqlQuery = "SELECT * FROM Media";

        const [rows] = await mysqlConnection.execute(mySqlQuery)

        return rows

    } catch (error) {

        console.log(error)

        return undefined

    }

}