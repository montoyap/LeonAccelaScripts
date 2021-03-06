function sendEmailwAttchmnt(fromAddress, toAddress, ccAddress, reportSubject, reportContent, aaReportName, parameters) {
	var reportName = aaReportName;

	report = aa.reportManager.getReportInfoModelByName(reportName);
	report = report.getOutput();

	report.setModule("Building");
	//report.setCapId(capId);

	//var parameters = aa.util.newHashMap();
	//Make sure the parameters includes some key parameters.
	//parameters.put("FromDate", aaReportParamValue1);
	//parameters.put("ToDate", aaReportParamValue2);
	//parameters.put("ReportType", aaReportParamValue3);


	report.setReportParameters(parameters);

	var permit = aa.reportManager.hasPermission(reportName, currentUserID);
	if (permit.getOutput().booleanValue()) {
		var reportResult = aa.reportManager.getReportResult(report);

		if (reportResult) {
			reportResult = reportResult.getOutput();
			var reportFile = aa.reportManager.storeReportToDisk(reportResult);

			reportFile = reportFile.getOutput();
			var sendResult = aa.sendEmail(fromAddress, toAddress, ccAddress, reportSubject, reportContent, reportFile);
		}
		if (sendResult.getSuccess())
			aa.print("A copy of this report has been sent to the valid email addresses.");
		else
			aa.print("System failed send report to selected email addresses because mail server is broken or report file size is great than 5M.");
	} else
		aa.print("No permission to report: " + reportName + " for Admin" + systemUserObj);
}
