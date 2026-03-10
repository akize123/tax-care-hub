import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const adminEmail = "akizeisrael123@gmail.com";
    const adminPassword = "Akizeisra123@";

    // Check if admin user already exists
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
    const existingAdmin = existingUsers?.users?.find(u => u.email === adminEmail);

    if (existingAdmin) {
      // Make sure admin role exists
      const { data: existingRole } = await supabaseAdmin
        .from('user_roles')
        .select('*')
        .eq('user_id', existingAdmin.id)
        .eq('role', 'admin')
        .single();

      if (!existingRole) {
        await supabaseAdmin
          .from('user_roles')
          .insert({ user_id: existingAdmin.id, role: 'admin' });
      }

      return new Response(JSON.stringify({ message: "Admin already exists, role ensured" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create admin user
    const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: { full_name: "Admin" },
    });

    if (createError) throw createError;

    // Assign admin role (the trigger already creates customer role, so update it)
    await supabaseAdmin
      .from('user_roles')
      .update({ role: 'admin' })
      .eq('user_id', newUser.user.id);

    return new Response(JSON.stringify({ message: "Admin created successfully" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
