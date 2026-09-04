import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required.',
      });
    }

    const { data, error } = await supabase.rpc('verify_login', {
      p_username: username.trim(),
      p_password: password,
    });

    if (error) {
      console.error('Supabase RPC verify_login error:', error);
      return res.status(500).json({
        success: false,
        message: 'Authentication service error.',
      });
    }

    if (data === true) {
      return res.status(200).json({
        success: true,
        message: 'Login successful.',
        data: {
          username: username.trim(),
        },
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid username or password.',
    });
  } catch (err: any) {
    console.error('Login controller error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Internal server error.',
    });
  }
}
