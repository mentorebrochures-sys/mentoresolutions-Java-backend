const supabase = require('../supabaseClient');

// 1. DATA LOAD KARNE (Fakt Pahila Record)
exports.getJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .select('*')
            .limit(1); // Ekach row pahije

        if (error) throw error;
        // Jar data nasel tar empty object {} pathva
        res.status(200).json(data.length > 0 ? data[0] : {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. DATA SAVE/UPDATE KARNE (Upsert Logic)
exports.saveJavaCourse = async (req, res) => {
    try {
        const { id, duration2, start_date2 } = req.body;
        console.log("Saving Java Data:", req.body);

        let result;
        if (id) {
            // Jar ID asel tar UPDATE kara
            result = await supabase
                .from('java_course')
                .update({ duration2, start_date2 })
                .eq('id', id)
                .select();
        } else {
            // Jar ID nasel tar INSERT kara
            result = await supabase
                .from('java_course')
                .insert([{ duration2, start_date2 }])
                .select();
        }

        if (result.error) throw result.error;
        res.status(200).json({ message: "Database Synced Successfully! ✅", data: result.data[0] });
    } catch (err) {
        console.error("Supabase Error:", err.message);
        res.status(500).json({ error: err.message });
    }
};