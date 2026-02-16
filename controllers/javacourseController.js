const supabase = require('../supabaseClient');

exports.getJavaAll = async (req, res) => {
    const { data, error } = await supabase.from('java_course').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.createJava = async (req, res) => {
    const { duration2, start_date2 } = req.body; // Using duration2 & start_date2
    const { data, error } = await supabase
        .from('java_course')
        .insert([{ duration2, start_date2 }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

exports.updateJava = async (req, res) => {
    const { data, error } = await supabase
        .from('java_course')
        .update(req.body) // Ensure req.body contains duration2/start_date2
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.deleteJava = async (req, res) => {
    const { error } = await supabase
        .from('java_course')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};