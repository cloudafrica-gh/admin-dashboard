import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {

  constructor() {
  }

  public estimate = [
    {
      'est_number': 1,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Accepted',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'est_number': 2,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Declined',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'est_number': 3,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Sent',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      },
        {
          'item': 'Vehicle Two',
          'description': 'Description',
          'unitcost': 112,
          'quantity': 1,
          'amount': 112
        },
        {
          'item': 'Vehicle three',
          'description': 'Description',
          'unitcost': 112,
          'quantity': 1,
          'amount': 112
        }],
      'item_discount': 0,
      'item_total': 326,
      'grand_total': 326,
      'item_tax': 0,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'est_number': 4,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Expired',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    }
  ];

  public invoice = [
    {
      'inv_number': 1,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Paid',
      'inv_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'payment_type': 'Paypal',
      'paid_date': '18-03-2018',
      'paid_amount': 112,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'inv_number': 2,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Paid',
      'inv_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'payment_type': 'Paypal',
      'paid_date': '18-03-2018',
      'paid_amount': 112,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'inv_number': 3,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Sent',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      },
        {
          'item': 'Vehicle Two',
          'description': 'Description',
          'unitcost': 112,
          'quantity': 1,
          'amount': 112
        },
        {
          'item': 'Vehicle three',
          'description': 'Description',
          'unitcost': 112,
          'quantity': 1,
          'amount': 112
        }],
      'item_discount': 0,
      'item_total': 326,
      'grand_total': 326,
      'item_tax': 0,
      'payment_type': 'Paypal',
      'paid_date': '18-03-2018',
      'paid_amount': 326,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    },
    {
      'inv_number': 4,
      'client': 'Barry Cuda',
      'est_date': {formatted: '18-09-2018'},
      'exp_date': {formatted: '18-09-2018'},
      'status': 'Partially Paid',
      'est_ID': 'est-01',
      'project': 'Food and Drinks',
      'email': 'barrycuda@example.com',
      'tax_type': 'GST',
      'client_address': '5754 Airport Rd, Coosada, AL, 36020',
      'billing_address': '23/24 Singanallur, Coimbatore, Tamilnadu, India',
      'items': [{
        'item': 'Vehicle One',
        'description': 'Description',
        'unitcost': 112,
        'quantity': 1,
        'amount': 112
      }],
      'item_discount': 0,
      'item_total': 112,
      'grand_total': 112,
      'item_tax': 10,
      'payment_type': 'Paypal',
      'paid_date': '18-03-2018',
      'paid_amount': 112,
      'other_info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel'
    }
  ];

  public expense = [{
    'expenseID': 1,
    'item': 'Dell Laptop',
    'purchase_from': 'Amazon',
    'purchase_date': {formatted: '18-09-2018'},
    'pur_date': {formatted: '18-09-2018'},
    'purchased_by': 'Loren Catlin',
    'amount': 1212,
    'paid_by': 'Cash',
    'status': 'Pending'
  },
    {
      'expenseID': 2,
      'item': 'Mac Notebook',
      'purchase_from': 'Amazon',
      'purchase_date': {formatted: '28-09-2018'},
      'pur_date': {formatted: '18-09-2018'},
      'purchased_by': 'Tarah Shropshire',
      'amount': 1212,
      'paid_by': 'Cheque',
      'status': 'Approved'
    }];
  public dafabet = [
    {
      id: '3321',
      serviceName: 'debitWalletAck',
      network: 'MTN',
      mobileNumber: '0240931884',
      customerName: 'godfrey mensah',
      customerEmail: 'godfreymenz@gmail.com',
      merchantReference: 'CAF979350989317D',
      amountPaid: '300.00',
      charge: '0.00',
      serviceStatus: '0',
      transMessage: 'Transaction FAILED',
      serviceTransId: '30BX4REK7DZN18',
      transStatus: 'Process completed',
      commentary: 'Cancelled input / Incorrect PIN / Timeout after 20secs',
      createdAt: '2019-11-01 01:33:41'
    },
    {
      id: '4464',
      serviceName: 'debitWalletAck',
      network: 'VODAFONE',
      mobileNumber: '0501855196',
      customerName: 'Koyaja Bagiri',
      customerEmail: 'Koyajabagiri96@gmail.com',
      merchantReference: 'CAF486865871760D',
      amountPaid: '150.00',
      charge: '0.00',
      serviceStatus: '1',
      transMessage: 'Message',
      serviceTransId: '18HU82E9LYS612',
      transStatus: 'Process completed',
      commentary: 'Successful transaction',
      createdAt: '2019-11-11 12:18:38'
    },
    {
      id: '1136',
      serviceName: 'debitWalletAck',
      network: 'MTN',
      mobileNumber: '0541128343',
      customerName: 'Emmanuel Frimpong',
      customerEmail: 'orteduxx@gmail.com',
      merchantReference: 'CAF864506020302D',
      amountPaid: '201.00',
      charge: '0.00',
      serviceStatus: '1',
      transMessage: 'CAF864506020302D',
      serviceTransId: '179F2PVIOBY47',
      transStatus: 'Process completed',
      commentary: 'Successful transaction',
      createdAt: '2019-11-11 12:18:38'
    },
    {
      id: '3922',
      serviceName: 'creditwallet',
      network: 'VODAFONE',
      mobileNumber: '0207679055',
      customerName: 'issah Jibril',
      customerEmail: 'Jibrilissah33@gmail.com',
      merchantReference: 'CAW295652324783P',
      amountPaid: '35.82',
      charge: '0.180',
      serviceStatus: '1',
      transMessage: 'Request successful',
      serviceTransId: '335YCOJVP3GA10',
      transStatus: 'Process completed',
      commentary: 'Successful credit transaction',
      createdAt: '2019-11-11 10:33:17'
    }
  ];

  public provident_fund = [{
    'fund_id': 123,
    'employee_name': 'John Doe',
    'designation': 'Web Designer',
    'fund_type': 'Fixed Amount',
    'employee_share': 2,
    'organization_share': 2,
    'employee_amount': 27878,
    'organization_amount': 20099,
    'status': 'Pending',
    'description': 'Lore mertuys bvunmen dbvebnndj'
  }];

  public taxes = [{
    'tax_id': 143,
    'tax_name': 'VAT',
    'tax_percentage': '14',
    'status': 'Active'
  },
    {
      'tax_id': 144,
      'tax_name': 'GST',
      'tax_percentage': '30',
      'status': 'Inactive'

    }];

}
