
if (wfTask == 'SR Intake' && wfStatus == 'Assigned') {
	newAppL1 = 'Enforcement';
	newAppL2 = 'Incident';
	newAppL3 = 'Abatement';
	newAppL4 = 'Graffiti';
	newAppDesc = 'Created by ' + capId.getCustomID();
	
//replaced branch(SR Create Child Cases)
createChildCases();
	}

