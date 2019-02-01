function getACARecordURL(acaUrl) {
	// Standard INCLUDES_ACCELA_FUNCTION version 9.2
	itemCap = (arguments.length == 2) ? arguments[1] : capId;
	var enableCustomWrapper = lookup("ACA_CONFIGS", "ENABLE_CUSTOMIZATION_PER_PAGE");
	var acaRecordUrl = "";
	var id1 = itemCap.ID1;
	var id2 = itemCap.ID2;
	var id3 = itemCap.ID3;
	var itemCapModel = aa.cap.getCap(itemCap).getOutput().getCapModel();

	acaRecordUrl = acaUrl + "/urlrouting.ashx?type=1000";
	acaRecordUrl += "&Module=" + itemCapModel.getModuleName();
	acaRecordUrl += "&capID1=" + id1 + "&capID2=" + id2 + "&capID3=" + id3;
	acaRecordUrl += "&agencyCode=" + aa.getServiceProviderCode();
	if (matches(enableCustomWrapper, "Yes", "YES"))
		acaRecordUrl += "&FromACA=Y";

	return acaRecordUrl;

}