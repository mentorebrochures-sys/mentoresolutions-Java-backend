const supabase = require('../supabaseClient');

// 1. All Steps dakhvane
exports.getAllSteps = async (req, res) => {
    const { data, error } = await supabase
        .from('pap_steps')
        .select('*')
        .order('id', { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
};

// 2. Navin Step Add karne
exports.addStep = async (req, res) => {
    const { title, description, status } = req.body;
    const { data, error } = await supabase
        .from('pap_steps')
        .insert([{ title, description, status }])
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({ message: "Step Added!", data });
};

// 3. Step Update karne
exports.updateStep = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const { data, error } = await supabase
        .from('pap_steps')
        .update({ title, description, status })
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: "Step Updated!", data });
};

// 4. Step Delete karne
exports.deleteStep = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('pap_steps')
        .delete()
        .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: "Step Deleted!" });
};