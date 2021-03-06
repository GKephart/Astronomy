import {connect} from "../../src/database";

/**

 * Helper function that grabs all misquotes

 **/

export async function getMediaByMediaId(mediaId:string) {
	console.log(mediaId)

	try {
		const mysqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(mediaId) AS mediaId, BIN_TO_UUID(mediaId) AS  mediaId, mediaIsVideo, mediaDescription, mediaAlt, mediaUrl FROM media WHERE mediaId = UUID_TO_BIN(:mediaId)";
		const [rows] = await mysqlConnection.execute(mySqlQuery, {mediaId})
		return rows
	} catch (error) {
		console.error(error.msg)
		return undefined
	}
}





