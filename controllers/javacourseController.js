const supabase = require('../supabaseClient');

// 1. Java Course chi mahiti milavne
exports.getJavaCourse = async (req, res) => {
    const { data, error } = await supabase
        .from('java_course')
        .select('*');

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Java Course One-Time Create karne
exports.createJavaCourse = async (req, res) => {
    // req.body madhe duration2 ani start_date2 asave
    const { data, error } = await supabase
        .from('java_course')
        .insert([req.body])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Java Course Update karne (Fakt details badalnyasathi)
exports.updateJavaCourse = async (req, res) => {
    const { id } = req.params; 

    const { data, error } = await supabase
        .from('java_course')
        .update(req.body)
        .eq('id', id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};