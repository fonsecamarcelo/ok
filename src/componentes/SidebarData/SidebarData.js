import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import StoreIcon from '@mui/icons-material/Store';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DiscountIcon from '@mui/icons-material/Discount';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export const SidebarData = [
    
    {
        
        title: "FARMÁCIA DA ILHA > 00.000.000/0000-00",
        icon: <StorefrontIcon />,
        link: "/farmacia",
    },
    
    {
        title: "Compras",
    },
    
    {
        title: "Promoções",
        icon: <WhatshotIcon />,
        link: "/promoções",
    },

    {
        title: "Produtos",
        icon: <AllInboxIcon />,
        link: "/Produtos",
    },

    {
        title: "Pedidos",
        icon: <ReceiptLongIcon />,
        link: "/pedidos",
    },

    {
        title: "Desconto",
        icon: <DiscountIcon />,
        link: "/desconto",
    },

    {
        title: "ADMINISTRATIVO",
    },
    

    {
        title: "Estabelecimentos",
        icon: <StoreIcon />,
        link: "/estabelecimentos",
    },

    {
        title: "AJUDA",
    },

   { 
       title: "Whatsapp",
        icon: <WhatsAppIcon />,
        link: "/ajuda",
    },

    {
        title: "Contato Distribuidora",
        icon: <PhoneIcon />,
        link: "/contatodistribuidora",
    },


    {
        title: "FARMÁCIA DA ILHA",
        icon: <StorefrontIcon />,
        link: "/farmacia",
    },

];




 
