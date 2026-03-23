-- Run this in your Supabase SQL editor

create table if not exists purchases (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  stripe_session_id text unique not null,
  stripe_customer_id text,
  product_id text not null,
  product_name text not null,
  price_id text not null,
  amount integer not null,
  created_at timestamp with time zone default now()
);

alter table purchases enable row level security;

create policy "Service role full access" on purchases
  for all using (true)
  with check (true);

create index purchases_email_idx on purchases(email);
