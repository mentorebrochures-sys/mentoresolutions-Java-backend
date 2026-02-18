const supabase = require('../supabaseClient');

// 1. All Java Courses Get karne
exports.getJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase.from('java_course').select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Navin Java Course Add karne (duration2, start_date2)
exports.createJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .insert([req.body]) // Frontend madhun duration2, start_date2 yenar
            .select();

        if (error) throw error;
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. Update Java Course
exports.updateJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .update(req.body)
            .eq('id', req.params.id)
            .select();

        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. Delete Java Course
exports.deleteJavaCourse = async (req, res) => {
    try {
        const { error } = await supabase
            .from('java_course')
                .delete()
                .eq('id', req.params.id);

        if (error) throw error;
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};