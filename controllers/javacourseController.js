const supabase = require('../supabaseClient');

// ==========================
// GET ALL JAVA COURSES
// ==========================
exports.getJavaAll = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw error;

        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// ==========================
// CREATE JAVA COURSE
// ==========================
exports.createJava = async (req, res) => {
    try {
        const { duration2, start_date2 } = req.body;

        if (!duration2 || !start_date2) {
            return res.status(400).json({ error: "All fields are required" });
        }

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


// ==========================
// UPDATE JAVA COURSE
// ==========================
exports.updateJava = async (req, res) => {
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


// ==========================
// DELETE JAVA COURSE
// ==========================
exports.deleteJava = async (req, res) => {
    try {
        const { error } = await supabase
            .from('java_course')
            .delete()
            .eq('id', req.params.id);

        if (error) throw error;

        res.status(200).json({ message: "Java Course Deleted Successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
