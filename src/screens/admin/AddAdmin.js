import React from 'react';
import {Form} from '../../Components/Html'

export default function AddAdmin (p) {
  const sendAdmin = () => p._admin.addAdmin()
  return <Form ph {...p} onClick={() => sendAdmin()} />
}