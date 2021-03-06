function getConditionTemplateModelValue(tModel, groupName, subGroupName, fieldName) {
	if (tModel) {
		var tForms = tModel.getTemplateForms();

		if (tForms.size() > 0) {
			for (var cntForms = 0; cntForms < tForms.size(); cntForms++) {
				var tForm = tForms.get(cntForms);
				var tGroupName = tForm.getGroupName();

				if (tGroupName.equals(groupName)) {
					var tSubGroups = tForm.getSubgroups();

					if (tSubGroups.size() > 0) {
						for (var cntSubGroup = 0; cntSubGroup < tSubGroups.size(); cntSubGroup++) {
							var tSubgroup = tSubGroups.get(cntSubGroup);
							var tSubgroupName = tSubgroup.getSubgroupName();

							if (tSubgroupName.equals(subGroupName)) {
								var tFields = tSubgroup.getFields();

								if (tFields.size() > 0) {
									for (var cntField = 0; cntField < tFields.size(); cntField++) {
										var tField = tFields.get(cntField);
										var tFieldName = tField.getFieldName();

										if (tFieldName.equals(fieldName)) {
											return tField.getDefaultValue();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return "";
}
