const supabase = require('../supabaseClient');

// 1. Sagle Java courses milavne (courses2 table)
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('courses2').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Navin Java course add karne
exports.create = async (req, res) => {
    // Ithe tumhi duration2 ani start_date2 ghet aahat
    const { duration2, start_date2 } = req.body; 
    const { data, error } = await supabase
        .from('courses2')
        .insert([{ duration2, start_date2 }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Java Course Update karne
exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from('courses2')
        .update(req.body) // req.body madhe duration2/start_date2 asel
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Java Course Delete karne
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('courses2')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};