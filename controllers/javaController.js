const supabase = require('../supabaseClient');

exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('java_courses').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.create = async (req, res) => {
    const { duration, start_date } = req.body; 
    const { data, error } = await supabase
        .from('java_courses')
        .insert([{ duration, start_date }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from('java_courses')
        .update(req.body)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('java_courses')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};