const supabase = require('../supabaseClient');

// 1. Get Java Course (Always first record)
exports.getJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .select('*')
            .limit(1)
            .single();

        // Jar data nasel tar null pathva, error nako
        res.status(200).json(data || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Save or Update Java Course (One-time Logic)
exports.saveJavaCourse = async (req, res) => {
    try {
        const { duration2, start_date2, id } = req.body;
        let result;

        if (id) {
            // Jar ID asel tar UPDATE kara
            result = await supabase
                .from('java_course')
                .update({ duration2, start_date2 })
                .eq('id', id)
                .select();
        } else {
            // Jar ID nasel tar pahilyanda INSERT kara
            result = await supabase
                .from('java_course')
                .insert([{ duration2, start_date2 }])
                .select();
        }

        if (result.error) throw result.error;
        res.status(200).json({ message: "Java Course Successfully Synced!", data: result.data });
    } catch (err) {
        console.error("Save Error:", err.message);
        res.status(500).json({ error: err.message });
    }
};