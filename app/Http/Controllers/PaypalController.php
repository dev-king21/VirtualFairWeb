<?php

   namespace App\Http\Controllers;
   use Illuminate\Http\Request;
   
   use PayPal\Rest\ApiContext;
   use PayPal\Auth\OAuthTokenCredential;
   use PayPal\Api\Amount;
   use PayPal\Api\Details;
   use PayPal\Api\Item;
   use PayPal\Api\ItemList;
   use PayPal\Api\Payer;
   use PayPal\Api\Payment;
   use PayPal\Api\RedirectUrls;
   use PayPal\Api\PaymentExecution;
   use PayPal\Api\Transaction;

   use PayPal\Exception\PayPalConnectionException;
   use Exception;

class PaypalController extends Controller
{ 
    private $api_context;

    public function __construct()
    {
        $this->api_context = new ApiContext(new OAuthTokenCredential(config('paypal.client_id'), config('paypal.secret')));
        $this->api_context->setConfig(config('paypal.settings'));
    }

    public function createPayment(Request $request)
    {
        $return_url = env('APP_URL').'/app'.$request->return_url;
        
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        
        $amount = new Amount();
        $amount->setCurrency('USD');
        $amount->setTotal(250.000);
        
        $transaction = new Transaction();
        $transaction->setAmount($amount);
        $transaction->setDescription('Costo del Stand!');
        
        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl($return_url);
        $redirectUrls->setCancelUrl($return_url);
    
        $payment = new Payment();
        $payment->setIntent('sale');
        $payment->setPayer($payer);
        $payment->setRedirectUrls($redirectUrls);
        $payment->setTransactions(array($transaction));

        $response = $payment->create($this->api_context);
        
        return $response;
    }

    /**
     ** This method confirms if payment with paypal was processed successful and then execute the payment, 
     ** we have 'paymentId, PayerID and token' in query string.
     **/

    public function executePaypal(Request $request)
    {
       /** Get the payment ID before session clear **/
        $paymentId = $request->get('payment_id');
        $payerId = $request->get('payer_id');
        $payment = Payment::get($paymentId, $this->api_context);
        $paymentExecution = new PaymentExecution();
        $paymentExecution->setPayerId($payerId);

        $executePayment = $payment->execute($paymentExecution, $this->api_context);
        if ($executePayment->getState() == 'approved') {
                if($executePayment->transactions[0]->related_resources[0]->sale->state == 'completed') {

                /** Here is where you would do your own stuff like add a record for the payment, trigger a hasPayed event, etc.*/
                // Do something to signify we succeeded

                    return response()->json(['status' => "success"], 200);
                }
        }
        return response()->json('failed', 400);
    }

}