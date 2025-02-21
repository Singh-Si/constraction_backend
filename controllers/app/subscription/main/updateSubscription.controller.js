const Subscription = require("@/models/app/subscription.model");

const UpdateSubscriptionController = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        sub_title,
        description,
        price,
        sites_count,
        users_count,
        admin_settings,
        project_management,
        media_library,
        material_management,
        labour_tracking_and_payable,
        vendor_payable,
        reports_and_dashboards,
        support,
        budget_calculation
    } = req.body;
    
    try {
        await Subscription.findOneAndUpdate(
            { _id: id },
            {
                title: title,
                sub_title: sub_title,
                description: description,
                price: price,
                sites_count: sites_count,
                users_count: users_count,
                permissions: {
                    admin_settings: admin_settings,
                    project_management: project_management,
                    media_library: media_library,
                    material_management: material_management,
                    labour_tracking_and_payable: labour_tracking_and_payable,
                    vendor_payable: vendor_payable,
                    reports_and_dashboards: reports_and_dashboards,
                    support: support,
                    budget_calculation: budget_calculation
                }
            }
        )

        return res.status(200).json({ success: true, error: "", message: "Subscription updated successfully." });
    } catch (error) {
        return res.status(500).json({ success: false, error: `Error: ${error}`, message: "" });
    }
}

module.exports = UpdateSubscriptionController;