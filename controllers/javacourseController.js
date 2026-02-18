const supabase = require('../supabaseClient');

// 1. Get Java Course Data
exports.getJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase.from('java_course').select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 2. Create Java Course
exports.createJavaCourse = async (req, res) => {
    try {
        // Table columns: duration2, start_date2
        const { duration2, start_date2 } = req.body;
        const { data, error } = await supabase
            .from('java_course')
            .insert([{ duration2, start_date2 }])
            .select();

        if (error) throw error;
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 3. Update Java Course
exports.updateJavaCourse = async (req, res) => {
    try {
        const { duration2, start_date2 } = req.body;
        const { data, error } = await supabase
            .from('java_course')
            .update({ duration2, start_date2 })
            .eq('id', req.params.id)
            .select();

        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 4. Delete Java Course
exports.deleteJavaCourse = async (req, res) => {
    try {
        const { error } = await supabase.from('java_course').delete().eq('id', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: "Deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};