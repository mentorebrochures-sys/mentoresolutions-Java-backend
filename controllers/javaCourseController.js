const supabase = require('../supabaseClient');

// 1. Sagle Java courses milavne
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('courses1').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Navin Java course add karne
exports.create = async (req, res) => {
    const { duration1, start_date1 } = req.body; 
    const { data, error } = await supabase
        .from('courses1')
        .insert([{ duration1, start_date1 }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Java course update karne
exports.update = async (req, res) => {
    // ID update karnyacha prayatna karu naye mhanun body madun to kadhla aahe
    const updateData = { ...req.body };
    delete updateData.id; 

    const { data, error } = await supabase
        .from('courses1')
        .update(updateData)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Java course delete karne
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('courses1')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};