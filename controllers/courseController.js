const supabase = require('../supabaseClient');

// 1. Sagle courses milavne
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Navin course add karne (Course Name sobat)
exports.create = async (req, res) => {
    // req.body madhe aata course_name (Java/DevOps) pan pathva
    const { duration, start_date, course_name } = req.body; 
    
    const { data, error } = await supabase
        .from('courses')
        .insert([{ duration, start_date, course_name }]) // Ithe course_name add kela
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Particular Course Fetch karne (User Panel sathi)
// He function tula Java ani DevOps filter karayla madat karel
exports.getByName = async (req, res) => {
    const { name } = req.params; // URL madhun 'java' kiwa 'devops' ghyayche
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('course_name', name)
        .single(); // Fakt ekch record pahije

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Update karne (Same as your code)
exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from('courses')
        .update(req.body)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 5. Delete karne (Same as your code)
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Course Deleted Successfully" });
};