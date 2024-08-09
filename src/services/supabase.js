import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oxivvoyznltblraejnwf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aXZ2b3l6bmx0YmxyYWVqbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MDQyNTYsImV4cCI6MjAzNzM4MDI1Nn0.zeytFsrz-D7uoSMGKVRxYA9dFfGrJ7oo1uXa4E1Mzr8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
