const supabase = require('../supabaseClient');

// 1. Sagle courses milavne
exports.getAll = async (req, res) => {
    // Table name changed to 'courses1'
    const { data, error } = await supabase.from('courses1').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Navin course add karne
exports.create = async (req, res) => {
    // Fields changed to duration1 and start_date1
    const { duration1, start_date1 } = req.body; 
    const { data, error } = await supabase
        .from('courses1')
        .insert([{ duration1, start_date1 }])
        .select(); 

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Update karne
exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from('courses1')
        .update(req.body) // req.body madhe duration1 kiva start_date1 asne garjeche aahe
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Delete karne
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('courses1')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Course Deleted Successfully" });
};